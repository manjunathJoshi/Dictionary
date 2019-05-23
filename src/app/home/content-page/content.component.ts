import { Component, OnInit } from '@angular/core';
import { DictionaryService } from 'src/providers/dictionary.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../../dialogData';
import { ModalComponent } from '../../modal/modal.component';
@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  animal: string;
  name: string;
  public data: any =[];
  public data1:any;
  public searchQuery:any;
  public queryData:any;
  public bookmarkItem:any=[];
  public alpahabetArray=[];
  public originalData;

  constructor(public dictionaryService: DictionaryService,private snackBar:MatSnackBar,public dialog: MatDialog) { }
  ngOnInit() {

    this.dictionaryService.getData().subscribe(
      (data) => {
        this.data = Object.values(data)
        this.originalData = this.data[0];
        this.data = this.data[0] || [];
        this.queryData = this.data;
      });
      this.alpahabetArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      this.dictionaryService.Bookmarkvalue.subscribe(val => {
        this.data.push(val);
      });
  }

  searchData() {
    this.data = this.queryData.filter((o: any) => {
      if (!this.searchQuery) {
        return true;
      }
      if(o.word !== null && 
        o.word
          .toString()
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())){
            return true;
      }
      return false;
    });
  }
  copyText(val: string){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.snackBar.open('URL Copied to ClipBoard','',{
        duration:2000,verticalPosition: 'top', horizontalPosition: 'right'
      });
    }
    addBookmarks(item){
      this.dictionaryService.bookmarkItems(item);
      this.dictionaryService.changeMessage('bookmarks added');
    }

    getAlphabetic(alphabet){
      this.data = this.queryData.filter((o:any)=>{
        if(!alphabet){
          return true;
        }
        if(o.word.charAt(0).toString().toUpperCase() == alphabet){
            return true;
        }
        return false
      })
    }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
  reset(){
    this.data = this.originalData;
  }
}
