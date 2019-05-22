import { Component ,ViewChild} from '@angular/core';
import { DictionaryService } from 'src/providers/dictionary.service';
import { ContentComponent } from '../content-page/content.component';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookMarkComponent {
  @ViewChild(ContentComponent)
  private contentComponent:ContentComponent;

  public bookmarks: any;
  constructor(public dictionaryService: DictionaryService) { }
  ngOnInit() {
    this.dictionaryService.currentMessage.subscribe(message => {
      this.bookmarks = this.dictionaryService.getBookMarkItem();
    });
  }
  clearAll(){
    this.bookmarks = [];
    this.dictionaryService.bookmarkArray.length=0;
  }
  removeItem(index){
    this.bookmarks.splice(index, 1);

  }

}
