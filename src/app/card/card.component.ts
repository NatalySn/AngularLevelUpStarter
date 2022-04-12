import { Input ,Component} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.scss']
  
})

export class CardComponent  {
 
  @Input() name : string = '';
  @Input()  number: string= '';
  @Input()  amount: string ='';
  @Input()  expirationDate: string ='';
  @Input() paymentSystem : 'visa'|'mastercard'|'mir' = 'visa';
  @Input() visa:boolean;
  @Input() mastercard:boolean;


}
