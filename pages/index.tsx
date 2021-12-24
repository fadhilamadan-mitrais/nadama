import { Avatar, List, Space } from 'antd';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `Lorem ipsum part ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }

  const IconText = ({ text }) => <Space>{text}</Space>;

  const myLoader = () => {
    return `https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png`;
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 3,
      }}
      dataSource={listData}
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
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Home;
