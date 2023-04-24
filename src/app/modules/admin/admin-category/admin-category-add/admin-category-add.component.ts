import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminCategoryService } from '../admin-category.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminMessageService } from '../../admin-message.service';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss']
})
export class AdminCategoryAddComponent implements OnInit {
  
  categoryForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminCategoryService: AdminCategoryService,
    private router: Router,
    private snackbar: MatSnackBar,
    private adminMessageService: AdminMessageService
    ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: [""],
      slug: ["", [Validators.required, Validators.minLength(4)]]
    })
  }

  submit(){
    this.adminCategoryService.createCategory(this.categoryForm.value)
    .subscribe({
      next: category => {
        this.router.navigate(["admin/categories"])
        .then(() => this.snackbar.open("Kategoria została dodana", '', {duration: 3000}));
      },
      error: err => {
          this.adminMessageService.addSpringErrors(err.error);
      }
    })
  }
}
