import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
// import * as marked from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  parseMarkdown(md$: Observable<string>): Observable<string> {
    const marked = require('marked');
    // const { marked } = require('marked');
    return md$.pipe(
      map((data: any) => {
        return marked.parse(data);        
        // return marked.Parser.parse(data);
      })
    );
  }
}
