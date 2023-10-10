import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function DropDownProp({ trigger, items,onAction  }) {
    return (
      <Dropdown className="bg-black-400">
        <DropdownTrigger>
          {trigger}
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" onAction={onAction}>
          {items.map((item, index) => (
            <DropdownItem key={index}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }