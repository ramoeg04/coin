import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CoinService } from 'src/app/services/coin.service';
import { Coin } from '../../core/interfaces/coin';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.sass']
})
export class CoinComponent implements OnInit {
  coins: Coin[] = [];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.coins.filter = filterValue.trim().toLowerCase();
  }
  constructor(private coinServices: CoinService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.coinServices.getAllCoin().subscribe((r: any) => {
      this.coins = r;
    }, err => {
      console.error(err);
    });
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DescriptionComponent, {
      data: { id: id }
    })
  }

}
