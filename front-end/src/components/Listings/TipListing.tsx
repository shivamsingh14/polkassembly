// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import NothingFoundCard from 'src/ui-components/NothingFoundCard';

import { GetLatestTipPostsQuery } from '../../generated/graphql';
import GovernanceCard from '../GovernanceCard';

interface Props {
  className?: string
  data: GetLatestTipPostsQuery
}

const TipProposals = ({ className, data }: Props) => {
	const noPost = !data.posts || !data.posts.length;
	const atLeastOneCurrentTip = data.posts.some((post) => {
		if(post.onchain_link?.onchain_tip.length){
			// this breaks the loop as soon as
			// we find a post that has a tip.
			return true;
		}
		return false;
	});

	if (noPost || !atLeastOneCurrentTip) return <NothingFoundCard className={className} text='There are currently no active tips.'/>;

	return (
		<ul className={`${className} proposals__list`}>
			{data.posts.map(
				(post) => {
					const onchainId = post.onchain_link?.onchain_tip_id;

					return !!post?.author?.username && !!post?.onchain_link?.onchain_tip.length &&
						<li key={post.id} className='proposals__item'>
							{<Link to={`/tip/${onchainId}`}>
								<GovernanceCard
									address={post.onchain_link.proposer_address}
									comments={post.comments_aggregate.aggregate?.count
										? post.comments_aggregate.aggregate.count.toString()
										: 'no'}
									tipReason={post.onchain_link.onchain_tip?.[0]?.reason}
									onchainId={onchainId}
									status={post.onchain_link.onchain_tip?.[0]?.tipStatus?.[0].status}
									title={post.title}
									topic={post.topic.name}
								/>
							</Link>}
						</li>
					;
				}
			)}
		</ul>
	);
};

export default styled(TipProposals)`
	margin-block-start: 0;
	margin-block-end: 0;

	li {
		list-style-type: none;
	}

	.proposals__item {
		margin: 0 0 1rem 0;
		a:hover {
			text-decoration: none;
		}
	}
`;
