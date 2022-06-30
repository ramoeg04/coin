import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CoinService } from 'src/app/services/coin.service';
import { Coin } from '../../core/interfaces/coin';
import { DescriptionComponent } from '../description/description.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.sass']
})
export class CoinComponent implements OnInit {
  coins:Coin[] = [];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private coinServices: CoinService, public dialog: MatDialog) { }

  ngOnInit(): void {
this.getAll();
  }

  getAll(){
    this.coinServices.getAllCoin().subscribe((r:any) => {
      this.coins = r;
    },err => {
      console.error(err);
    });

  }
  openDialog(id:string) {
    const dialogRef = this.dialog.open(DescriptionComponent, {
      data: {id: id}
    });
  }


}
