class UndoRedo {
    constructor(object) {
      this.object = object;
      this.momento = {...this.object};
      this.objState = null;
    }
  
    set(key, value) {
      if(!(key in this.object)){
        return this.object = {
            ...this.object,
            [key]: value
          }
      }
      return this.object = {
              ...this.object,
              [key]: value
          }
    }
  
    get(key) {
      let objValue = '';
      for(const [k, value] of Object.entries(this.object)){
        if(k === key){
          objValue = value;
        }
      }
      return objValue;
    }
  
    del(key) {
      const newObj = {...this.object};
      if(key in newObj){
        delete newObj[key];
      }
      return this.object = newObj;
    }
  
    undo() {
      const objCurrentState = {...this.object};
      if(this.object === this.momento || this.object === this.objState){
        return 'There is no operation to undo';
      }
      if(!this.objState){
        this.object = this.momento;
        }else{
          this.object = this.objState;
        }
        this.objState = objCurrentState;
        return this.object;
    }
  
    redo() {
      const objCurrentState = {...this.object};
      if(this.object !== this.momento || this.object === this.objState){
        return 'There is no operation to redo';
      }
      this.object = this.objState;
      this.objState = objCurrentState
      return this.object;
    }
  }
  
  const undoRedo = new UndoRedo({x: 4, y: 3});
  