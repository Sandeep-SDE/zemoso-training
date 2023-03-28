
/**
 * Partial type
 */

interface Point {
    x: number;
    y: number;
  }
  
  let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
  pointPart.x = 10;

  /**
   * Required type means each and every type must be defined
   */

  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };

  /**
   * Record type is used to define an object's specific keytype and value type
   */
  const nameAgeMap: Record<string, number> = {
    'Alice': 21,        //{key | string && value | number}
    'Bob': 25
  };
  console.log(nameAgeMap);

  /**
   * Omit type is used to remove the typing of specifed elements
   */
  interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const aP: Omit<Person, 'age' | 'location'> = {
    name: 'sandy',
    // age : 20,
    // location : "hyd",
    //********** `Omit` has removed age and location from the type and they can't be defined here********
  };
  console.log(aP);

  /**
   * Pick type is used to pick the specific type and it remove all other type 
   */
  interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bP: Pick<Person, 'name'> = {
    name: 'Bob',
    //age : 28,
    //location : DvK
    // ********`Pick` has only kept name, so age and location were removed from the type and they can't be defined here ***
  };

  /**
   * Exclude type is opposite of pick, it remove what is defined and can access other types
   */
  type Primitive = string | number | boolean
const ex: Exclude<Primitive, string> = true;
console.log(ex);


/**
 * Return types is used to specify the retrun type of the function or a variable
 */
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};
console.log(point);

/**
 * Parameter type is just as a parameter of array and we can use the spcefic parameter as type
 */
type PointPrinter = (p: { x: number; y: number; }, q: {a : string; b : string;}) => void;
const linePoint: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};
console.log(linePoint);

const pointString: Parameters<PointPrinter>[1] = {
    a : "sandeep",
    b : "dp-ds-sp"
}

interface User {
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
  }
}