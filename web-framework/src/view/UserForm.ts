import User from "../model/User";

export default class UserForm {
  constructor(public parent: Element, public data: User) {
    this.data.on("change", () =>{
        this.render()
    };
  }

  eventMap = (): { [key: string]: () => void } => ({
    "click:.setAgeButton": this.onSetAgeButtonClick,
    "click:.updateNameButton": this.onUpdateNameButtonClick,
  });

  onSetAgeButtonClick = (): void => this.data.setRandomAge();
  onUpdateNameButtonClick = () : void =>{
      const input = this.parent.querySelector('input')
     
      if(input){
          const name = input.value
          this.data.set({name})
      }
  };

  bindEvent = (fragment: DocumentFragment) => {
    const eventMap = this.eventMap();

    for (let eventKey in eventMap) {
      const [eventName, elementSelector] = eventKey.split(":");

      fragment.querySelectorAll(elementSelector).forEach((el) => {
        el.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  };

  template = () => `
    <div>
        <H1>Edit Form</H1>
        <pre>User name : ${this.data.get("name")}</pre>
        <pre>User age  : ${this.data.get("age")}</pre>
        <input/>
        <button class="setAgeButton">SET RANDOM AGE</button>
        <button class="updateNameButton">UPDATE NAME</button>
    </div>
  `;

  render = (): void => {
    this.parent.innerHTML = ""

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvent(templateElement.content);

    this.parent.append(templateElement.content);
  };
}
