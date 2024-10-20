import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"; // Adjust import paths as needed

const DrawerDemo = ({ isOpen, onClose, initialGoal }) => {
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Player Stats</DrawerTitle>
          <DrawerDescription>
            Here are the details for the selected player.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <h3>Initial Goal: {initialGoal}</h3>
          {/* Add other stats and player info here */}
        </div>
        <DrawerClose onClick={onClose}>Close</DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemo;
