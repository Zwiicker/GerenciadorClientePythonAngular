import { Component, OnInit,Input } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-add-edit-usu',
  templateUrl: './add-edit-usu.component.html',
  styleUrls: ['./add-edit-usu.component.css']
})
export class AddEditUsuComponent implements OnInit {

  constructor(private service:UsuarioService) { }

  @Input() usu: any;

  UsuarioId!:string;
  UsuarioNome!:string;
  UsuarioEmail!:string;
  UsuarioTelefone!:string;
  UsuarioEndereco!:string;
  UsuarioProfissao!:string;
  UsuarioArquivoCurriculo!:string;
  PhotoFilePath!:string;

  UsuarioList:any=[]
 

  ngOnInit(): void {
    this.loadUsuarioList();
  }

  loadUsuarioList(){
    this.service.getAllUsuarioNames().subscribe((data:any)=>{
    this.UsuarioId=this.usu.UsuarioId;
    this.UsuarioNome=this.usu.UsuarioNome;
    this.UsuarioEmail=this.usu.UsuarioEmail;
    this.UsuarioTelefone=this.usu.UsuarioTelefone;
    this.UsuarioEndereco=this.usu.UsuarioEndereco;
    this.UsuarioProfissao=this.usu.UsuarioProfissao;
    this.UsuarioArquivoCurriculo=this.usu.UsuarioArquivoCurriculo;
    this.PhotoFilePath=this.service.PhotoUrl+this.UsuarioArquivoCurriculo;

  });
}

addUsuario(){
  var val = {UsuarioId:this.UsuarioId,
    UsuarioNome:this.UsuarioNome,
    UsuarioEmail:this.UsuarioEmail,
    UsuarioTelefone:this.UsuarioTelefone,
    UsuarioEndereco:this.UsuarioEndereco,
    UsuarioProfissao:this.UsuarioProfissao,
    UsuarioArquivoCurriculo:this.UsuarioArquivoCurriculo};

  this.service.addUsuario(val).subscribe(res=>{
    alert(res.toString());
  });
}

updateUsuario(){
  var val = {UsuarioId:this.UsuarioId,
    UsuarioNome:this.UsuarioNome,
    UsuarioEmail:this.UsuarioEmail,
    UsuarioTelefone:this.UsuarioTelefone,
    UsuarioEndereco:this.UsuarioEndereco,
    UsuarioProfissao:this.UsuarioProfissao,
    UsuarioArquivoCurriculo:this.UsuarioArquivoCurriculo};

  this.service.updateUsuario(val).subscribe(res=>{
  alert(res.toString());
  });
}

uploadPhoto(event:any){
  var file=event.target.files[0];
  const formData:FormData=new FormData();
  formData.append('uploadedFile',file,file.name);

  this.service.UploadPhoto(formData).subscribe((data:any)=>{
    this.UsuarioArquivoCurriculo=data.toString();
    this.PhotoFilePath=this.service.PhotoUrl+this.UsuarioArquivoCurriculo;
  })
}
}
