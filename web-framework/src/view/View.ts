import Model from "../model/shared/Model";

export default abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public data: T) {
    this.data.on("change", () => {
      this.render();
    });
  }

  abstract template(): string;

  regionsMap = (): { [key: string]: string } => {
    return {};
  };

  eventMap = (): { [key: string]: () => void } => ({});

  bindEvent = (fragment: DocumentFragment) => {
    const eventMap = this.eventMap();

    for (let eventKey in eventMap) {
      const [eventName, elementSelector] = eventKey.split(":");

      fragment.querySelectorAll(elementSelector).forEach((el) => {
        el.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  };

  mapRegions = (fragment: DocumentFragment): void => {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  };

  onRender = (): void => {};

  render = (): void => {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvent(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();

    this.parent.append(templateElement.content);
  };
}
