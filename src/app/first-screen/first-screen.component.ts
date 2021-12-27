import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendDataService } from '../Services/send-data.service';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {
mygroup:FormGroup
arr:String[]=["pdf","csv","txt"]
style:string
name:String=""
ss:String="s"
imageToShow: any;
data1:FormData=new FormData()
  constructor(private service:SendDataService) { 
    this.mygroup=new FormGroup({
      "file":new FormControl(null)
    })
    this.style="style1"
    
  }

  
  handleFileInput(files: Event) {
    var file=files.target as HTMLInputElement
    var filetoupload:File = (file.files as FileList)[0];
    this.name=filetoupload.name
    if(this.data1.has('file')){
      this.data1.set("file",filetoupload)
    }
    else
      this.data1.append('file',filetoupload)
}
  public get file():any{
    return this.mygroup.get("file")
  }
  onSubmit(){
    var c=0
    var isImageLoading=true
    //var name=this.data1.get("file")!!.toString.name
    if(this.name!=null){
      var ext=this.name.slice(this.name!!.length-3,this.name!!.length).toLowerCase()
      for(var i=0; i<this.arr.length;i++){
        if(this.arr[i]==ext){
          c=1
          break
        }
      }
      if(c==1){
      this.service.SendFile(this.data1).subscribe((data)=>{
       
        this.ss="s1"
        isImageLoading = false;
        console.log(data)
      },error => {
        isImageLoading = false;
        console.log(error);
     })
    }
    else{
      alert("Please upload csv pdf or txt files only")
    } 
   
  }
  else{
    alert("Please upload a file")
  }
    console.log(this.name.toLowerCase())
  }
  getBar(){
   this.service.getBar().subscribe((data:Blob)=>{
     if(this.name!=null){
    this.createImageFromBlob(data);
     }
    console.log(data)
   })
  }
  getPie(){
    this.service.getPie().subscribe((data:Blob)=>{
      this.createImageFromBlob(data);
      console.log(data)
     })
  }
  getHist(){
    this.service.getHist().subscribe((data:Blob)=>{
      this.createImageFromBlob(data);
      console.log(data)
     })
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
       this.style="style"
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
 
 
  ngOnInit(): void {
  }

}
