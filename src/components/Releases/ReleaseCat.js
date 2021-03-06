import React from 'react';
import Link from 'next/link';

import { ReleaseTitle } from './styles';

export default function ReleaseCategory({ work }) {
  return (
    <Link
      href="/work/[lang]/[slug]"
      as={`/work/${work.language_name}/${work.stub}`}
    >
      <a style={{ color: 'inherit' }}>
        <ReleaseTitle className="pb-2 mb-0">{work.name}</ReleaseTitle>
      </a>
    </Link>
  );
}
