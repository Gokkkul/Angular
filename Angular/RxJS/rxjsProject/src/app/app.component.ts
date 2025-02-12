import { Component } from '@angular/core';
import { map, Observable, of, range, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjsProject';
  first_subscriber_observable!: number;
  second_subscriber_observable!: number;
  thrid_subscriber_observable!: number;
  first_subscriber_subject!: number;
  second_subscriber_subject!: number;
  third_subscriber_subject!: number;

  // Subject

  myObservable = new Observable(observable =>{
      
  })

  constructor(){


    //------------------Observables are unicast-----------------
    //observable
    // console.log("Observable");
    // let observable = new Observable<number>(ele =>
    //   ele.next(Math.random()))

    // //first subscriber
    // observable.subscribe(result => {
    //   this.first_subscriber_observable = result;
    //   console.log(result)
    // })

    // //second subscriber
    // observable.subscribe(result => {
    //   this.second_subscriber_observable = result;
    //   console.log(result)
    // })

    // //third subscriber
    // observable.subscribe(result => {
    //   this.thrid_subscriber_observable = result;
    //   console.log(result)
    // })
    // //--------------------------------------------------------


    // console.log("Subject");
    
    // //------------------Subjects are multicast-----------------
    // //subject
    // let subject = new Subject<number>()

    // //first subscriber
    // subject.subscribe(result => {
    //   this.first_subscriber_subject = result;
    //   console.log(result)
    // })

    // //second subscriber
    // subject.subscribe(result => {
    //   this.second_subscriber_subject = result;
    //   console.log(result)
    // })

    // //third subscriber
    // subject.subscribe(result => {
    //   this.third_subscriber_subject = result;
    //   console.log(result)
    // })

    // subject.next(Math.random())
    //--------------------------------------------------------



    



    // this.subject.next(1);
    // this.subject.next(2);

    // this.subject.subscribe((value: number) => console.log('Observer 1:',value));
    // this.subject.subscribe((value: number) => console.log('Observer 2:',value));

    // this.subject.next(1);
    // this.subject.next(2);


    // of(2,4,6)
    // .pipe(map(value => value*2))
    // .subscribe(result => console.log(result)
    // )

    // range(1,10)
    // .subscribe(result => console.log(result));

    
  }

  


  // subject = new Subject<number>();

  // myObservable = new Observable(observer => {
  //     observer.next(1),
  //     observer.next(2),
  //     observer.next(3),
  //     observer.complete();
  //   });

  // subject = new Subject<number>();
  
  // myObservable = new Observable(observer => {
  //   observer.next('Hello'),
  //   observer.next('World'),
  //   observer.complete();
  // });
  
  // constructor() {
  //   this.myObservable.subscribe(value => console.log(value));
  // }

  // observer = {
  //   next: (value: any) => console.log('Received:', value),
  //   error: (err: any) => console.error('Error:', err),
  //   complete: () => console.log('Done!')
    
  // };

  // observable = new Observable<number>(obs => {
  //   obs.next(1);
  //   obs.next(2);
  //   obs.complete();
  // });

  // constructor() {
  //   this.observable.subscribe(this.observer);
  // }


  // orderStatusObservable = new Observable<string>;

  // subscription: any;

  // customerObserver = {
  //   next: (status: string) => console.log('Order Status:', status),
  //   error: (err: any) => console.error('Error:', err),
  //   complete: () => console.log('Order tracking completed!')
    
    
    
  // };

  // ngOnInit(){
  //   this.orderStatusObservable = new Observable(observer =>{
  //     observer.next('Order Placed');
  //     setTimeout(() => observer.next('Shipped'), 2000);
  //     setTimeout(() => observer.next('Out for Delivery'), 4000);
  //     setTimeout(() => observer.next('Delivered'), 6000);

  //     setTimeout(() => observer.complete(), 6000);
  //   });

  //   this.subscription = this.orderStatusObservable.subscribe(this.customerObserver);
  //   setTimeout(() =>{
  //     this.subscription.unsubscribe();
  //     console.log('Unsubscribed from order status updates');
      
  //   }, 8000)

    
  // }

  // orderStatus: string = '';
  // orderStatusObservable = new Observable<string>;
  
  // subscription: any;
  
  // customerObserver = {
  //   next: (status: string) => {
  //     this.orderStatus = status;
  //     console.log('Order Status:', status);
  //   } ,
  //   error: (err: any) => console.error('Error:', err),
  //   complete: () => console.log('Order tracking completed!')
    
  // };
  
  ngOnInit(){
    // this.orderStatusObservable = new Observable(observer =>{
    //   observer.next('Order Placed');
    //   setTimeout(() => observer.next('Shipped'), 2000);
    //   setTimeout(() => observer.next('Out for Delivery'), 4000);
    //   setTimeout(() => observer.next('Delivered'), 6000);

    //   setTimeout(() => observer.complete(), 6000);
    // });

    


    // this.subscription = this.orderStatusObservable.subscribe(this.customerObserver);
    // setTimeout(() => {
    //   this.subscription = this.orderStatusObservable.subscribe(this.customerObserver);
      
    // }, 7000);
    // this.subscription = this.orderStatusObservable.subscribe(this.customerObserver);

    
  }

  // unsubscribe(){
  //     this.subscription.unsubscribe();
  //     this.orderStatus = 'Unsubscribed from order status updates';
  //     // console.log('Unsubscribed from order status updates');
      
    // }


    

  }
  
