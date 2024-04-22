# @golden-tiger/custom-clean-plugin

This webpack plugin will remove all files and directories passed from parameters before webpack bundling.

```
import CustomCleanPlugin from '@golden-tiger/custom-clean-plugin';
// ...
{
  plugins: [
    new CustomCleanPlugin([
      path.join(__dirname, 'dist'),
      path.join(__dirname, 'index.html'),
      // ...
    ]),
  ],
}
```
