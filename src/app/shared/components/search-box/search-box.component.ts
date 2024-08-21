import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  //Un Subject es un observable al cual me puedo suscribir
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeHolder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
      this.debouncerSuscription =  this.debouncer
      .pipe(
        debounceTime(1000)
      )
      .subscribe(value => {
        this.onDebounce.emit( value);
      })
  }
  //Se debe llamar el ngOnDestroy despues de llamar a un subscriber
  ngOnDestroy():void {this.debouncerSuscription?.unsubscribe();
  }

  emitValue( value: string ): void {

    this.onValue.emit( value );

  }

  onKeyPress( searchTem: string ){
    this.debouncer.next( searchTem)
  }

}
