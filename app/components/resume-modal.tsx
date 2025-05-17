"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useTheme } from "@/app/themes/switch-board";

export default function ResumeModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const theme = useTheme().theme;
  const resumeURL =
    "https://sleepysoft-global-fileserver.s3.us-west-2.amazonaws.com/Isaac_Yep_Resume.pdf";
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={`relative transform overflow-hidden rounded-lg ${theme}-bg-secondary px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95`}
          >
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h3"
                  className={`text-base font-semibold ${theme}-text-primary`}
                >
                  My Personal Resume
                </DialogTitle>
                <div className="mt-2">
                  <p className={`text-sm ${theme}-text-muted-light`}>
                    Looking forward to speaking with you 😊
                  </p>
                </div>
              </div>
              <iframe
                src={resumeURL}
                width="100%"
                height="600rem"
                className={`pt-4`}
              />
            </div>
            <div className="mt-5 sm:mt-6">
              {/* <button
                type="button"
                onClick={() => setOpen(false)}
                className={`inline-flex w-full justify-center rounded-md ${theme}-bg-primary px-3 py-2 text-sm font-semibold ${theme}-text-muted-light shadow-2xl hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              > */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className={`inline-flex w-full justify-center rounded-md ${theme}-bg-primary px-3 py-2 text-sm font-semibold ${theme}-text-muted-light shadow-2xl ${theme}-modal-btn-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
              >
                ⏎
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
