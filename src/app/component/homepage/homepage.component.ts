import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DREAM_INSERT_FORM } from 'src/app/form/dream.form';
import { Category } from 'src/app/model/category.model';
import { Dream } from 'src/app/model/dream.model';
// import * as RecordRTC from 'recordrtc';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(builder: FormBuilder, private router: Router, private domSanitizer: DomSanitizer) { 
    this.dreamInsertForm = builder.group(DREAM_INSERT_FORM); 
  }

  dreamInsertForm : FormGroup; 
  dreamToAdd! : Dream; 

  categories : Category[] = ["Nightmare", "creative", "erotic", "happy", "lucid", "recurrent"] ; 
  


  onSubmit(){};

  return(){
    this.dreamInsertForm.reset(); 
  }; 

  ngOnInit(): void {
  }





// record : any;
// recording = false;//URL of Blob
// url: string | undefined;
// error: string | undefined;


// sanitize(url: string) {
//   return this.domSanitizer.bypassSecurityTrustUrl(url);
// }

// /**
// * Start recording.
// */
// initiateRecording() {
//   this.recording = true;
//   let mediaConstraints = {
//     video: false,
//     audio: true
//   };
//   navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
// }

// /**
// * Will be called automatically.
// */
// successCallback(stream: any) {
//   var options = {
//   mimeType: "audio/wav",
//   numberOfAudioChannels: 1,
//   sampleRate: 45000,
//   };
  
//   //Start Actuall Recording
//   var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
//   this.record = new StereoAudioRecorder(stream, options);
//   this.record.record();
// }
  
// /**
// * Stop recording.
// */
// stopRecording() {
//   this.recording = false;
//   this.record.stop(this.processRecording.bind(this));
// }

// /**
// * processRecording Do what ever you want with blob
// * @param  {any} blob Blog
// */processRecording(blob: Blob | MediaSource) {
//   this.url = URL.createObjectURL(blob);
//   console.log("blob", blob);
//   console.log("url", this.url);
//   }

// /**
// * Process Error.
// */errorCallback(error: any) {
// this.error = 'Can not play audio in your browser';
// }

}
