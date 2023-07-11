using System;
using Avalonia.Markup.Xaml;
using Avalonia.Styling;

namespace GroupBox.Avalonia.ControlThemes;

public partial class ClassicTheme : Styles
{
    /// <summary>
    /// Initializes a new instance of the <see cref="ClassicTheme"/> class.
    /// </summary>
    /// <param name="sp">The parent's service provider.</param>
    public ClassicTheme(IServiceProvider? sp = null)
    {
        AvaloniaXamlLoader.Load(sp, this);
    }
}
