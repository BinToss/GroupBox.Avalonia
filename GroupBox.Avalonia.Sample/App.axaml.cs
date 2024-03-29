using Avalonia;
using Avalonia.Controls.ApplicationLifetimes;
using Avalonia.Markup.Xaml;
using GroupBox.Avalonia.Sample.Views;
using HotAvalonia;

namespace GroupBox.Avalonia.Sample;

public partial class App : Application
{
    public override void Initialize()
    {
        this.EnableHotReload();
        AvaloniaXamlLoader.Load(this);
    }

    public FluentWindow? FluentWindow { get; private set; }
    public SimpleWindow? SimpleWindow { get; private set; }

    public override void OnFrameworkInitializationCompleted()
    {
        if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)
        {
            desktop.MainWindow = new MainWindow();
            FluentWindow = new();
            SimpleWindow = new();
        }

        base.OnFrameworkInitializationCompleted();
    }
}