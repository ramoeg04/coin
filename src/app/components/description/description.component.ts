import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent implements OnInit {
public coins :any = ''
  constructor(private coinServices: CoinService,public dialogRef: MatDialogRef<DescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.coinServices.getCoinId(this.data.id).subscribe((r:any)=>{
      this.coins = r;
      console.log(this.coins)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
