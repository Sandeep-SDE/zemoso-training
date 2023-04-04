

class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('sandeep');
  value.setValue(10);
  console.log(value.toString());


/**
 * Generics on functions
 * 
 */
  function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  
  console.log(createPair<string, number>('zemosolabs', 24)); 