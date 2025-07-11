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

const DialogComponent = ({onClick, open, setOpen}) => {
  return (
    <div>
  <Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Thank you for contacting.</DialogTitle>
      <DialogDescription className={"text"}>
         Your form has been successfully submitted. You will soon hear from me.  
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

