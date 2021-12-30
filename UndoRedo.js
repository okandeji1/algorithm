class UndoRedo {
  #initialState;
  #previousState;
  #currentState;
  #object;

  constructor(object) {
    this.#object = object;
    this.#initialState = { ...this.#object };
    this.#previousState = null;
    this.#currentState = null;
  }

  set(key, value) {
    this.#previousState = { ...this.#object };
    console.log("set initial ", this.#previousState);

    // if key does not exit, add to existing object
    if (!(key in this.#object)) {
      this.#object = {
        ...this.#object,
        [key]: value,
      };
      console.log("set final ", this.finalState);
      return this.#object;
    }
    //   Set key to new value
    this.#object = {
      ...this.#object,
      [key]: value,
    };
    console.log("set final ", this.finalState);
    return this.#object;
  }

  get(key) {
    let objValue = "";
    for (const [k, value] of Object.entries(this.#object)) {
      if (k === key) {
        objValue = value;
      }
    }
    return objValue;
  }

  del(key) {
    this.#previousState = { ...this.#object };
    console.log("del initial ", this.#previousState);
    this.#currentState = { ...this.#object };
    if (key in this.#currentState) {
      delete this.#currentState[key];
      this.#object = this.#currentState;
      console.log("del final ", this.finalState);
      return this.#object;
    }
    return "This key does not exist";
  }

  undo() {
    if (
      this.#object === this.#initialState ||
      this.#object === this.#previousState
    ) {
      return "There is no operation to undo";
    }
    this.#currentState = { ...this.#object };
    this.#object = { ...this.#previousState };
    this.#previousState = { ...this.#currentState };
    return this.#object;
  }

  redo() {
    if (
      this.#object === this.#initialState ||
      this.#object === this.#previousState
    ) {
      return "There is no operation to redo";
    }
    this.#currentState = { ...this.#object };
    this.#object = { ...this.#previousState };
    this.#previousState = { ...this.#currentState };
    return this.#object;
  }
}

const undoRedo = new UndoRedo({ x: 4, y: 3 });
undoRedo.get("x");
undoRedo.set("x", 1);
undoRedo.set("y", 2);
undoRedo.set("z", 3);
undoRedo.del("z");
undoRedo.undo();
undoRedo.redo();
