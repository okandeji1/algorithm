const undoRedo = object => {
    const momento = {...object};
  let objState;
    return {
      set(key, value) {
        if(!(key in object)){
            object = {
              ...object,
              [key]: value
            }
        }else {
            object = {
                ...object,
                [key]: value
            }
        }
      },
      get(key) {
        let objValue = '';
        for(const [k, value] of Object.entries(object)){
          if(k === key){
            objValue = value;
          }
        }
        return objValue;
      },
      del(key) {
        const newObj = {...object};
        if(key in newObj){
          delete newObj[key];
        }
        return object = newObj;
      },
      undo() {
        const objCurrentState = {...object};
        if(object === momento || object === objState){
          throw 'There is no operation to undo';
        }
        if(!objState){
            object = momento;
          }else{
            object = objState;
          }
           objState = objCurrentState;
      },
      redo() {
        const objCurrentState = {...object};
        if(object !== momento || object === objState){
          throw 'There is no operation to redo';
        }
        object = objState;
          objState = objCurrentState
      }
    };
  };

  function serialize(patientData) {
    const paid = patientData.paid ? "Y" : "N";
    const codes = (patientData.treatmentCodes || []).join(",")
    
    return `>${patientData.patientId}
  +${patientData.visitDate}|${paid}|${codes}`;
  }
  
  function deserialize(patientString) {
    const lines = patientString.split("\n");
    const segments = lines[1].split("|");
    
    return {
      patientId: lines[0].substr(1),
      visitDate: segments[0].substr(1),
      paid: (segments[1] === "Y"),
      treatmentCodes: segments[2].split(",").map(Number)
    };
  }

  undoRedo({x: 2, y: 5});

//   Couldn't notice challenge #2 and challenge #3 because my focus was on challenge #1.

// On challenge #1, the del() method should work perfectly but the tester keep bringing all sort of error, like, "key x should be undefined while value 1 should be equal to undefined". I believe removing a key from an object will delete the key and value but don't know the assertion that is being used to test the solution because I tried many approaches.

// undo/redo too should work perfectly but the assertion used, I don't know.

function closestNumbers(numbers) {
  let absDiff = Number.MAX_VALUE;
  const arr = []
  let firstElement;
  let secondElement;
  // Write your code here
  for(let i = 0; i < numbers.length - 1; i++){
      for(let j = i + 1; j < numbers.length; j++){
          if(Math.abs(numbers[i] - numbers[j]) < absDiff){
              absDiff = Math.abs(numbers[i] - numbers[j]);
              if(Math.abs(numbers[i] - numbers[j]) === absDiff){
                  if(numbers[i] < numbers[j]){
                      firstElement = numbers[i];
                      secondElement = numbers[j];
                      arr.push(firstElement, secondElement);
                  }
              }
          }
      }
  }
  
  return arr;
  
}