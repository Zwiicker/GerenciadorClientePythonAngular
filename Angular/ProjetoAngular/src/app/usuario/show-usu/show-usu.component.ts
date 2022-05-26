import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-show-usu',
  templateUrl: './show-usu.component.html',
  styleUrls: ['./show-usu.component.css']
})
export class ShowUsuComponent implements OnInit {

  constructor(private service:UsuarioService) { }

  UsuarioList:any=[];

  ModalTitle!:string;
  ActivateAddEditUsuComp:boolean=false;
  usu:any;

  ngOnInit(): void {
    this.refreshUsoList();
  }

  addClick(){
    this.usu={
       UsuarioId:0,
       UsuarioNome:"",
       UsuarioEmail:"",
       UsuarioTelefone:"",
       UsuarioEndereco:"",
       UsuarioProfissao:"",
       UsuarioArquivoCurriculo:"",
    }
    this.ModalTitle="Adicionar Cliente";
    this.ActivateAddEditUsuComp=true;

  }

  closeClick(){
    this.ActivateAddEditUsuComp=false;
    this.refreshUsoList();
  }

  editClick(item:any){
    console.log(item);
    this.usu=item;
    this.ModalTitle="Editar Usuário";
    this.ActivateAddEditUsuComp=true;
  }

  deleteClick(item:any){
    if(confirm('Tem certeza que quer excluir esse cliente??')){
      this.service.deleteUsuario(item.UsuarioId).subscribe(data=>{
        alert(data.toString());
        this.refreshUsoList();
      })
    }
  }

  refreshUsoList(){
    this.service.getUsoList().subscribe(data=>{
      this.UsuarioList=data;
    });
  }

}
