import React, { ReactElement } from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import { Schema } from '@alephdata/followthemoney'


export function markdownToHtml(markdown: string): string {
  const result = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .processSync(markdown)
  return result.contents as string;
}

/*
 * https://stackoverflow.com/questions/23618744/rendering-comma-separated-list-of-links
 */
export function wordList(arr: Array<any>, sep: string): ReactElement {
  if (arr.length === 0) {
    return <></>;
  }

  return arr.slice(1)
    .reduce((xs, x, i) => xs.concat([
      <span key={`${i}_sep`} className="separator">{sep}</span>,
      <span key={i}>{x}</span>
    ]), [<span key={arr[0]}>{arr[0]}</span>])
}

export function getAllParents(schemata: Array<Schema>): Array<Schema> {
  const parents = Array.from(schemata)
  for (const schema of schemata) {
    for (const parent of schema.getParents()) {
      if (parents.indexOf(parent) === -1) {
        parents.push(parent)
      }
    }
  }
  return parents;
}