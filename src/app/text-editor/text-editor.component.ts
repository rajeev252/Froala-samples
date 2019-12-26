import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit, OnChanges {
  private froalaControl: any;
  @Input() placeholderText = 'Insert text here...';
  @Input() showCharacterCount = true;
  @Input() characterCountMax = 500;
  @Input() heightMin = 300;
  public isInitialized = true;
  public abc = true;
  public editorOptions = {
    placeholderText: this.placeholderText,
    attribution: false,
    charCounterCount: this.showCharacterCount,
    charCounterMax: this.characterCountMax,
    heightMin: this.heightMin,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
  };
  constructor() { }

  ngOnInit() {
    this.updateEditorOptions();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateEditorOptions();
  }

  public initialize(initControls: any) {
    console.log('initializing');
    this.froalaControl = initControls;
    if (this.froalaControl) {
      this.froalaControl.initialize();
    }
  }

  public onContentChanged(text: string) {
    debugger
    console.log(text);
  }

  public defaultTextEditorToolbarButtons: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],

    toolbarInline: true,
  };

  private updateEditorOptions() {
    // if (!this.toolbarButtons) {
    //   this.toolbarButtons = this.defaultTextEditorToolbarButtons;
    // }

    if (this.froalaControl) {
      const editor = this.froalaControl.getEditor();
      if (editor) {
        this.isInitialized = false;
        if (editor.opts) {
          editor.opts = Object.assign(editor.opts, this.editorOptions);
        }
        this.froalaControl.destroy();
        this.initialize(this.froalaControl);
        this.isInitialized = true;
      }
    }
  }
}
