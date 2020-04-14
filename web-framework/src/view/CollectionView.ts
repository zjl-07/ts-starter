import Collection from "../model/shared/Collection";
import Model from "../model/shared/Model";

export default abstract class CollectionView<T, K> {
  constructor(public collections: Collection<T, K>, public parent: Element) {}

  abstract renderItem(model: T, parentElement: Element): void;

  render() {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");

    this.collections.collection.forEach((collection) => {
      const parentElement = document.createElement("div");
      this.renderItem(collection, parentElement);
      templateElement.content.append(parentElement);
    });

    this.parent.append(templateElement.content);
  }
}
