import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../Shared/movies.service';
import { Movies } from '../Shared/Movie';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  

  constructor(private movies:MoviesService) { }

  ngOnInit() {
    this.resetForm();
    this.getProducts();
  }

  getProducts() {
    this.movies.products = [];
    this.movies.getProducts().subscribe((data) => {
      console.log(data);
      this.movies.products = data;
    });
  }


  getProduct(id) {
    this.movies.getProduct(id).subscribe((data) => {
      console.log(data);
      this.movies.newproduct = data;
    });
  }

  resetForm(form? : NgForm) {
    if(form !=null)
    form.reset();
    this.movies.selectedMovies = {
      id: 0,
      category: '',
      name: '',
      description: '',
      uploaddate:''
    }
  }


  showForEdit(mov : Movies){
    this.movies.selectedMovies = Object.assign({},mov);;
  }


 /* addProduct() {
    this.movies.addProduct(this.MovieData).subscribe((result) => {
      console.log('success');
    }, (err) => {
      console.log(err);
    });
  }*/


  onSubmit(form: NgForm){
    if(form.value.id == 0){
    
    this.movies.addProduct(form.value).subscribe((result) => {
      console.log('add');
      this.resetForm(form);
        this.getProducts();
      }, (err) => {
      console.log(err);
      });
    }
    else{

      this.movies.updateProduct(form.value.id, form.value)
      .subscribe(data => {
        console.log('update');
        this.resetForm(form);
        this.getProducts();
        
    });
  
    } 
  }


  delete(id) {
    this.movies.deleteProduct(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }


}
