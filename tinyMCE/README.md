Describe how you found the details to make this work
In a simple text file document your journey to getting Parts A and B working. What resources
did you rely on? For what issues were answers difficult to find and how did you get over that
hurdle?

As a fairly junior programmer, I rely on documentation (and Google!) a lot.

I began at the TinyMCE setup tutorial and copy-and-pasted the standard setup from https://www.tinymce.com/docs/get-started/first-steps/. From there I tried to run TinyMCE.WindowManager, but WindowManager didn't exist and kept running into errors that I couldn't figure out. Eventually I realized that TinyMCE is built asynchronously, so the WindowManager didn't exist yet and I needed to run it after the TinyMCE had loaded. This took me a while to figure out, but by looking at enough examples I figured out there was a setup field that took a callback.

After I figured that part out, I looked around for the button documentation, finally got that working, and then tried to figure out how to create a dialog. However the dialog documentation https://www.tinymce.com/docs/advanced/creating-custom-dialogs/ looked super complicated. I tried playing around with it but couldn't get anything working, but eventually looking at enough examples, I figured out there was a much easier way to do it, from the example code in https://www.tinymce.com/docs/advanced/creating-a-plugin/. From there the rest was just plumbing.
