import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  imageDets = [
    {id: 1, imageUrl:'../../assets/img1.png'},
    {id: 2, imageUrl:'../../assets/img1.png'},
    {id: 3, imageUrl:'../../assets/img1.png'},
    {id: 4, imageUrl:'../../assets/img1.png'}
  ]

}
