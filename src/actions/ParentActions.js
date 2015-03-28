import { Actions } from "flummox";

export default class ParentActions extends Actions {
  constructor(flux) {
    super();

    this.flux = flux;
  }

  fetch(slug) {
    // return {
    //   val: 'Parent Value'
    // };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Parent Async Resolved');
        resolve({
          val: 'Parent Value'
        });
      },4000)
    });
  }
}