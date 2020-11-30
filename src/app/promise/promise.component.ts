import { ChangeDetectorRef, Component, OnInit, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef) { }

  public models = ["Iphone", "Samsung"];
  public mobileAvailable = "";
  public mobileAvailableAsync = "";
  public mobileAvailableFetch = "";
  public blockedMsg = "";
  public nonBlockedMsg = "";
  public promiseAllMsg = [];
  public users = [];
  public usersTransformed = "";
  public usersUpperCased = "";
  tick = Date.now();

  ngOnInit(): void {

    this.log('😍 synchronous 1');

    this.log(this.codeBlocker());

    setTimeout( _ => {
      console.log('🥝 timeout 2');
    }, 0);


    
    Promise.resolve().then(_ => console.log('🍇 Prmoise'));

    this.log('😍 synchronous 2');
  }

  log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - this.tick}`);

  // Not using promises correctly
  // codeBlocker = () => {
  //   return new Promise((resolve, reject) => {
  //     let i = 0;
  //     while(i < 1000000000) {
  //       i++;
  //     }
  //     resolve('🦁 billion lopps done');
  //   });
   
  // }
  codeBlocker = () => {
    return Promise.resolve().then(v => {
      let i = 0;
      while(i < 100000) {
        i++;
      }
      return '🦁 billion lopps done';
    })
   
  }

  checkAvailability(): Promise<string> {
    return new Promise((resolve, reject) => {
      let random = Math.floor((Math.random() * 3) + 1);
      setTimeout(() => {
        console.log(random);
        let mobile = this.models[random];
        mobile ? resolve(`${mobile} is available`):  reject(`Out of stock. Please check later`);;
      }, 2000);
    });
  }

  checkMobilesAvailable() {
    this.mobileAvailable = "Fetching Data...";
    let buyMobile = this.checkAvailability();
    buyMobile.then((res: string) => {
      this.mobileAvailable = res;
    }).catch((err) => {
      this.mobileAvailable = err;
    });
    this.nonBlockedMsg = "I was not blocked. Thanks!"

  }

  async checkMobilesAvailableAsync() {
    this.blockedMsg = "";
    try {
      this.mobileAvailableAsync = "Fetching Async Data...";
      this.mobileAvailableAsync = await this.checkAvailability();
    } catch (error) {
      this.mobileAvailableAsync = error;
    }
    this.blockedMsg = "You just blocked me";
    
  }

  fetchMobilesAvailable() {
    try {
      this.mobileAvailableFetch = "Fetching Data from server...";
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => this.mobileAvailableFetch = json);
    } catch (error) {
      this.mobileAvailableFetch = error;
    }
  }

  promiseMeAll() {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });
    
    Promise.all([promise1, promise2, promise3]).then((values) => {
      this.promiseAllMsg = values;
    });
  }

  // First promise returns an array
  getUsers() : Promise<{id: string}[]>{
  return new Promise((resolve, reject) => {
    return setTimeout(
      () => resolve([{ id: 'jon' }, { id: 'andrey' }, { id: 'tania' }]),
      600
    )
  })
}

// Second promise relies on the resulting array of first promise
getIdFromUser(user)  {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(user.id), 500)
  })
}

// Third promise relies on the result of the second promise
capitalizeIds(id) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(id.toUpperCase()), 200)
  })
}

async runAsyncFunctions () {
  const users = await this.getUsers() as [{id: string}];

  Promise.all(
    users.map(async (user) => {
      const userId = await this.getIdFromUser(user);
      console.log(userId);

      const capitalizedId = await this.capitalizeIds(userId);
      return {lowerCase: userId , upperCase: capitalizedId};
    })
  ).then((res: [{lowerCase: string , upperCase: string}]) => {
    this.usersTransformed = JSON.stringify(res, null, 2);
    JSON.stringify(users, null, 2)
  });

  // for (let user of users) {
  //   const userId = await this.getIdFromUser(user)
  //   console.log(userId)

  //   const capitalizedId = await this.capitalizeIds(userId)
  //   console.log(capitalizedId)
  // }

  console.log(JSON.stringify(users, null, 2));
}


}
