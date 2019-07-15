import React from 'react';
import { PostsListCurrentUser } from './PostsListCurrentUser';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
  const component = shallow(<PostsListCurrentUser {...props} />);
  return component;
};

describe('PostsList component', () => {
  let component;

  beforeEach(() => {
    component = setUp(); 
  });
 
  it('Should render without errors', () => {
    const wrapper = component.find('.posts-list-current-user')
    expect(wrapper.length).toBe(1);
  });
})
