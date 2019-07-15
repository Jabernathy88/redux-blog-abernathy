import React from 'react';
import { PostsListOtherUsers } from './PostsListOtherUsers';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
  const component = shallow(<PostsListOtherUsers {...props} />);
  return component;
};

describe('PostsList component', () => {
  let component;

  beforeEach(() => {
    component = setUp(); 
  });
 
  it('Should render without errors', () => {
    const wrapper = component.find('.posts-list-other-users')
    expect(wrapper.length).toBe(1);
  });
})
