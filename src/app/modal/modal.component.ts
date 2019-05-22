import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../app/dialogData';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DictionaryService } from '../../providers/dictionary.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  wordForm:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,_fb: FormBuilder,public dictionaryService:DictionaryService) {
      this.wordForm = _fb.group({
        id: ["", Validators.required],
        word: ["", Validators.required],
        description: ["", Validators.required],
        audio_url: ["", Validators.required],
      })
    }

    Submit() {
      this.dictionaryService.changebookmarksval(this.wordForm.value);
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}