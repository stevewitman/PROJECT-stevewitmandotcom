import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BlogAndNote } from '../../admin-models/blog-and-note';

@Component({
  selector: 'app-admin-blog-list-page',
  templateUrl: './admin-blog-list-page.component.html',
  styleUrls: ['./admin-blog-list-page.component.scss'],
})
export class AdminBlogListPageComponent implements OnInit {
  blogList: BlogAndNote[] = [
    {
      title: 'First Sample Blog Post (Public)',
      slug: 'First_Sample_Blog_Post_(Public)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quibusdam id fugiat autem quaerat delectus molestiae recusandae consectetur sint illum?',
      tags: [
        'Dependency Injection',
        'Routing',
        'Dependency Injection',
        'Routing',
        'Routing',
        'Routing',
        'Dependency Injection',
        'Routing',
      ],
      created: '2023-01-01',
      updated: '2023-01-15',
      blog: true,
      public: true,
      archive: false,
      markdown: `
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

> Horizontal Rules

___

      `,
    },
    {
      title: 'Another Example Of A Blog Post (Public)',
      slug: 'Another_Example_Of_A Blog_Post_(Public)',
      description:
        'Dummy text generators may contain seasonal words instead of scrambled Latin for your web page designs. Picture the Christmas favorite, "All I Want for Christmas Is You," translated into Latin and scrambled before you pepper it into the spaces on your favorite web page design theme.',
      tags: ['RxJS'],
      created: '2023-01-05',
      updated: '',
      blog: true,
      public: true,
      archive: false,
      markdown: '',
    },
    {
      title: 'Unfinished Blog (PRIVATE)',
      slug: 'Unfinished_Blog_(PRIVATE)',
      description:
        'This dummy text generator includes words like halvah, tiramisu, macaroon, and other confections that allow you to be sure that your sugary placeholder message resonates with your marketing department.',
      tags: [],
      created: '2023-01-10',
      updated: '',
      blog: true,
      public: false,
      archive: false,
      markdown: '',
    },
    {
      title:
        'Yet Another Article Yet Another Article Yet Another Article (Public)',
      slug: 'Yet_Another_Article_Yet_Another_Article_Yet_Another_Article_(Public)',
      description: '',
      tags: [],
      created: '2023-01-15',
      updated: '',
      blog: true,
      public: true,
      archive: false,
      markdown: '',
    },
    {
      title: 'This Is A Note (PRIVATE)',
      slug: 'This_Is_A_Note_(PRIVATE)',
      description:
        "Then Jason Cosper's Hipster Ipsum generator will provide you with the gastropub mumblecore your email marketing campaign needs.",
      tags: [],
      created: '2023-01-03',
      updated: '2023-01-11',
      blog: false,
      public: false,
      archive: false,
      markdown: '',
    },
    {
      title: 'Note (Public)',
      slug: 'Note_(Public)',
      description:
        'You will receive up to 100 paragraphs of the most incomprehensible corporate jargon to ever grace a quarterly report',
      tags: [],
      created: '2023-01-12',
      updated: '',
      blog: false,
      public: true,
      archive: false,
      markdown: '',
    },
  ];

  listFilterForm = new FormGroup({
    // showBlogPosts: new FormControl(true),
    // showDevNotes: new FormControl(true),
    postTypeCtrl: new FormControl('showBlogPosts'),
    showDescriptions: new FormControl(true),
    showTags: new FormControl(true),
  });

  // blogsFilterToggle = true;
  // notesFilterToggle = true;
  descriptionFilterToggle = true;
  tagsFilterToggle = true;

  constructor() {}

  ngOnInit(): void {}

}
