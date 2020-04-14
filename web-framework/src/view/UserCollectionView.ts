import CollectionView from "./CollectionView";
import User, { userProps } from "../model/User";
import UserShow from "./UserShow";

export default class UserCollectionView extends CollectionView<
  User,
  userProps
> {
  renderItem(model: User, parentElement: Element): void {
    new UserShow(parentElement, model).render();
  }
}
