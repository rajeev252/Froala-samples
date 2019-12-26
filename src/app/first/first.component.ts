import { Component, OnInit } from '@angular/core';

import FroalaEditor from 'froala-editor';
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/js/third_party/embedly.min.js";
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/video.min.js';
import "../../assets/js/img.min.js"
// import "../../assets/js/video.min.js"
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  tb = ['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'];
  public options = {
    iframe: true,
    imageEditButtons: this.tb,
    toolbarBottom: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      },
      'moreRich': {
        'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
      },
      'moreMisc': {
        'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
        'align': 'right',
        'buttonsVisible': 2
      }
    },
    toolbarSticky: false
  }


  constructor() { }

  ngOnInit() {
  }

  public initControls;
  public deleteAll;

  public initialize(initControls) {
    debugger
    this.initControls = initControls;
    this.deleteAll = function() {
        this.initControls.getEditor().html.set();
        this.initControls.getEditor().undo.reset();
        this.initControls.getEditor().undo.saveStep();
    };
  }
  public initializeLink = function(linkInitControls) {
    this.linkInitControls = linkInitControls;
   };

  public imgOptions: Object = {
    imageEditButtons: ['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'],
    angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
    immediateAngularModelUpdate: true,
    imageMultipleStyles: false,
    imageUpload: true,

  }

  public videoOptions: object = {
    videoUploadParam: 'video_param',
    videoUploadURL: '/https://youtu.be/hMy5za-m5Ew',
    videoUploadParams: { id: 'my_editor' },
    videoUploadMethod: 'POST',
    videoMaxSize: 50 * 1024 * 1024,
    videoAllowedTypes: ['webm', 'jpg', 'ogg'],

    // 'video.inserted': function ($img, response) {
    //   debugger
    //   alert("test");
    //   // Video was inserted in the editor.
    // },
    events: {
      'video.inserted': function ($img, response) {
        debugger
        alert("testddd");
      }
    }
  }

  public test: object = {
    // iconsTemplate: 'font_awesome_5',
    // documentReady: true,
    htmlUntouched: true,
    htmlAllowedTags: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    // height: 1500,
    fullPage: true,
    fontFamilySelection: true,
    enter: FroalaEditor.ENTER_BR,
    editInPopup: false,
    heightMax: 2000,
    imageUpload: true,
    // dragInline: true,
    imageEditButtons: ['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'],
    angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
    immediateAngularModelUpdate: true,
    fileUpload: true,
    htmlIgnoreCSSProperties: ['font-family', 'font-size'],
    // toolbarButtons:[['bold','underline','strikeThrough','italic'], ['fontFamily', 'fontSize', 'textColor', 'backgroundColor'],['inlineClass', 'inlineStyle', 'clearFormatting']],
    iframe: true,
    toolbarSticky: true,
    toolbarStickyOffset: 2000,
    toolbarButtons: {
      'moreText': {
        // 'buttons': ['bold', 'disabled','italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
        buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
        align: ['left', 'right', 'center']
      },
      'moreParagraph': {
        'buttons': ['formatOLSimple', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'],
      },
      'moreRich': {
        'buttons': ['insertLink', 'disabled', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
      },
      'moreMisc': {
        'buttons': ['undo', 'disabled', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help']
      }
    },
    events: {
      'image.inserted': function (e, editor) {
        debugger
        var editor = new FroalaEditor();
        document.getElementById('hacky-button-because-froala').click();
      }
    }
  }
  public tested(e) {
    debugger
  }

  public test1: object = {
    toolbarButtons:
    {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      },
      'moreRich': {
        'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
      },
      'moreMisc': {
        'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help']
      }
    },
    // toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsMD: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      },
      'moreRich': {
        'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
      },
      'moreMisc': {
        'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help']
      }
    },
    toolbarButtonsSM: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      },
      'moreRich': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
      },
      'moreMisc': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help']
      }
    },
    // toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help'],
    toolbarButtonsXS: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      },
      'moreRich': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
      },
      'moreMisc': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help']
      }
    },
    draggable: true
  }

  public options2: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'check', 'outdent', 'indent', 'quote', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', '|', 'insertTable', 'insertHR', '|', 'emoticons', 'specialCharacters', '|', 'undo', 'redo', '|', 'help', 'html'],

    toolbarInline: true,
  };

  // public content: string = '<img  src="https://raw.githubusercontent.com/froala/wysiwyg-editor/master/editor.jpg" class="fr-fil" alt="book" width="150" />';
  public video: string = '<img  src="https://www.youtube.com/watch?v=mPhboJR0Llc" class="fr-fil" alt="video" width="150" />';


  public imageData: object = {
    imageEditButtons: this.tb,
    imageUploadURL: 'http://localhost:59456/api/Fruits/UploadFiles',
    imageUploadMethod: 'POST',
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
    imageMaxSize: 5 * 1024 * 1024,
    imageUploadParams: {
      id: 'files'
    },
    events: {
      'image.beforeUpload': function (images) {
        debugger;
        // Return false if you want to stop the image upload.
        console.log(images + "before");
        // alert(images);
      },
      'image.uploaded': function (event) {
        const response = JSON.parse(event);
        const url = response.secure_url;
        this.image.insert(response.link, false, null, this.image.get(), { "link": response.link })
      },
      'image.inserted': function ($img, response) {
        alert("Image Uploaded Successfully");
      },
      'image.replaced': function ($img, response) {
        // Image was replaced in the editor.
      },
      'image.error': function (error, response) {
        if (error.code == 1) {
          console.log("1")
        }
        // No link in upload response.
        else if (error.code == 2) {
          console.log("2")
        }
        // Error during image upload.
        else if (error.code == 3) {
          console.log("3")
        }
        // Parsing response failed.
        else if (error.code == 4) {
          debugger
          console.log("4")
        }
        // Image too text-large.
        else if (error.code == 5) {
          console.log("5")
        }
        // Invalid image type.
        else if (error.code == 6) {
          console.log("6")
        }

        // Image can be uploaded only to same domain in IE 8 and IE 9.
        else if (error.code == 7) {
          console.log("7")
        }

        // Response contains the original server response to the request if available.
      }


    }
  }
}
