import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DREAM_INSERT_FORM } from 'src/app/form/dream.form';
import { Category } from 'src/app/model/category.model';
import { Dream } from 'src/app/model/dream.model';
import { User } from 'src/app/model/user.model';
import { DreamService } from 'src/app/service/dream.service';
import { UserService } from 'src/app/service/user.service';
// import * as RecordRTC from 'recordrtc';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userService : UserService, private dreamService : DreamService, builder: FormBuilder, private router: Router, private domSanitizer: DomSanitizer) { 
    this.dreamInsertForm = builder.group(DREAM_INSERT_FORM);
    userService.obsUserIsConnected.subscribe(connected => this.connected = connected); 
    userService.obsUser.subscribe(username => {
      this.username = username;
      if(this.connected){
        this.getInfoUser()
      }
    }); 
  }

  dreamInsertForm : FormGroup; 
  dreamToAdd! : Dream; 

  
  connected!: boolean;
  username! : string | null; 
  user! : User; 

  categories : Category[] = ["Nightmare", "creative", "erotic", "happy", "lucid", "recurrent"] ; 
  


  onSubmit(){
    if(this.dreamInsertForm.valid){
      this.dreamToAdd = this.dreamInsertForm.value; 
      this.dreamToAdd.user = this.user.reference; 
      this.dreamService.createDream(this.dreamToAdd).subscribe({
        complete: () => {
          this.dreamInsertForm.reset();
          this.router.navigateByUrl('/dreams');
          alert("Votre rêve a bien été ajouté !")
        },
        error: (error) => {
          alert(error.message),
          console.log(this.dreamToAdd);
        }
      })
    }
  };

  return(){
    this.dreamInsertForm.reset(); 
  }; 

  getInfoUser(){
    if(this.username != null){ 
      this.userService.getOneByUsername(this.username).subscribe({
        next : (user: User) => this.user = user,
      })
    }
  }

  categoryChecked($event: any){
    console.log($event);
    
  }

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
