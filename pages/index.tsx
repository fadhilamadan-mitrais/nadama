import { useState } from 'react';

import { Post } from '~type/posts/post';
import { listPosts } from '~utils/dummy/posts';

import { Avatar, List, Space } from 'antd';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  const [posts, setPots] = useState<Post[]>(listPosts);

  const IconText = ({ text }) => <Space>{text}</Space>;

  const myLoader = () => {
    return `https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png`;
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 2,
      }}
      dataSource={posts}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText text="156" key="list-vertical-star-o" />,
            <IconText text="156" key="list-vertical-like-o" />,
            <IconText text="2" key="list-vertical-message" />,
          ]}
          extra={
            <Image
              loader={myLoader}
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              alt="photo"
              width={444}
              height={273}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.body}
        </List.Item>
      )}
    />
  );
};

export default Home;
