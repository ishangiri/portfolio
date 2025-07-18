'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import React from 'react'
import { Button } from "./ui/button"

const DialogComponent = ({onClick, open, setOpen, title, desc}) => {
  return (
    <div>
  <Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription className={"text"}>
         {desc} 
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose asChild>
            <Button onClick = {onClick}>
                Okay
            </Button>
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
</div>
  )
}

export default DialogComponent

