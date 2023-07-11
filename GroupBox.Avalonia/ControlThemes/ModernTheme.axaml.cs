using System;
using Avalonia.Markup.Xaml;
using Avalonia.Styling;

namespace GroupBox.Avalonia.ControlThemes;

public partial class ModernTheme : Styles
{
    public ModernTheme(IServiceProvider? sp = null)
    {
        AvaloniaXamlLoader.Load(sp, this);
    }
}
