import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Button id="PopoverFocus" type="button">
        Breakfast Pancakes
      </Button>
      {' '}
      <Button id="PopoverClick" type="button">
        Sausage and Muffins
      </Button>
      {' '}
      <Button id="PopoverLegacy" type="button">
        Blueberry Breakfast Bread
      </Button>
      <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
        <PopoverHeader>Price: 190 pesos</PopoverHeader>
        <PopoverBody><img src="/break.jpg"  width="250px" alt="" /></PopoverBody>
      </UncontrolledPopover>
      <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
        <PopoverHeader>Price: 300 pesos</PopoverHeader>
        <PopoverBody><img src="/o.jpg"  width="250px" height="166.5px" alt="" /></PopoverBody>
      </UncontrolledPopover>
      <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
        <PopoverHeader>Price: 200 pesos</PopoverHeader>
        <PopoverBody>
        <img src="/li.jpg"  width="250px" height="166.5px" alt="" /></PopoverBody>
      </UncontrolledPopover>
    </div>
  );
}

export default Example;