import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, interval, map, Observable, of, Subject, Subscription, switchMap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent implements OnDestroy {
 

//   private stockPriceSubject = new Subject<number>();
//   private subscription!: Subscription;
//   latestPrice: number | null = null;
//   noOfSubscribers: number = 0;

//   title = 'Observable-Subject';
  // stockPrice!: number;


  // Using Observable
  // fetchStockPrice(){
  //   this.getStockPrice().subscribe(price => {
  //     this.stockPrice = price;
  //     console.log('New stock price fetched: ', price);
      
  //   });
  // }

  // getStockPrice(): Observable<number>{
  //   return new Observable(observer => {
  //     const price = (Math.random() * 10000).toFixed();
  //     observer.next(parseInt(price));
  //     observer.complete();
  //   })
  // }

//   constructor(){

//     interval(2000)
//     .pipe(map(() => (Math.random() * 1000).toFixed(2)))
//     .subscribe(price => {
//       console.log('New Stock price: ', price);
//       this.stockPriceSubject.next(parseFloat(price));
      
//     })
//   }

//   subscribeToStockUpdates(){
//     this.subscription = this.stockPriceSubject.subscribe(price => {
//       this.latestPrice = price;
//       console.log('Received stock price ', price);
//     })
//   }

//   subscribeAndUpdatePlus(){
//     this.subscribeToStockUpdates();
//     this.noOfSubscribers++;
//   }

//   unsubscribeFromUpdates(){
//     this.subscription?.unsubscribe();
//     console.log('Unsubscribed from stock updates');
//   }

//   subscribeAndUpdateMinus(){
//     this.unsubscribeFromUpdates();
//     this.noOfSubscribers--;
//   }

//   ngOnDestroy(): void {
//     this.subscription?.unsubscribe();
//   }
// }

export class AppComponent implements AfterViewInit {

  constructor (private http: HttpClient){}

  ngAfterViewInit(): void {
    // const searchInput = document.getElementById('search');
    // if (searchInput) {
    //   fromEvent(searchInput,'input')
    //   .pipe(
    //     map((event: any) => event.target.value),
    //     debounceTime(2000),
    //     distinctUntilChanged()
    //   )
    //   .subscribe(value => console.log('Searching for:', value));
      
    // }else{
    //   console.error('Search input not found in the DOM');
      
    // }



    // throttle

    // const button = document.getElementById('clickButton');
    // if(button){
    //   fromEvent(button,'click')
    //   .pipe(throttleTime(2000))
    //   .subscribe(() => console.log('Button Clicked'));
      
    // }

    const searchInput = document.getElementById('search');
    if(searchInput){
      fromEvent(searchInput,'input')
      .pipe(
        map((event:any) => event.target.value),
        debounceTime(2000),
        distinctUntilChanged(),
        switchMap(value => {
          if(!value){
            console.log("Empty input skipping request.");
            return of([])
          }
          // const apiUrl = `https://dummyjson.com/products/search?q=${value}`;
          const apiUrl = `https://api.github.com/users/${value}`;
          console.log('API Request:', apiUrl);
          return this.http.get(apiUrl).pipe
          (
            map((response: any) => {
              console.log('API Response: ', response);
              return response.products || [];
            }),
            catchError(error => {
              console.error('API Error: ', error);
              return of([]);
              
            })
            
          )
          
        })
      ).subscribe(val=>console.log(val))
    }

    // of([
      
    // ]).pipe(map()).subscribe(res => {
    //   console.log();      
    // })
  }

}