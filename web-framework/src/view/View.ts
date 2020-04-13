import Model from "../model/shared/Model";

export default abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public data: T) {
    this.data.on("change", () => {
      this.render();
    });
  }

  abstract eventMap(): { [key: string]: () => void };
  abstract template(): string;

  bindEvent = (fragment: DocumentFragment) => {
    const eventMap = this.eventMap();

    for (let eventKey in eventMap) {
      const [eventName, elementSelector] = eventKey.split(":");

      fragment.querySelectorAll(elementSelector).forEach((el) => {
        el.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  };

  render = (): void => {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvent(templateElement.content);

    this.parent.append(templateElement.content);
  };
}
