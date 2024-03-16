using Avalonia;
using Avalonia.Controls;
using Avalonia.Interactivity;

namespace GroupBox.Avalonia.Sample.Views;

public partial class MainWindow : Window
{
    public MainWindow() => InitializeComponent();

    internal static App? App => Application.Current as App;
    public static FluentWindow? FluentWindow => App?.FluentWindow;
    public static SimpleWindow? SimpleWindow => App?.SimpleWindow;

    public static void FluentWindowButton_OnChecked(object sender, RoutedEventArgs args)
    {
        if (FluentWindow?.IsVisible is false)
            FluentWindow.Show();
    }

    public static void FluentWindowButton_OnUnchecked(object sender, RoutedEventArgs args)
    {
        if (FluentWindow?.IsVisible is true)
            FluentWindow.Hide();
    }

    public static void SimpleWindowButton_OnChecked(object sender, RoutedEventArgs args)
    {
        if (SimpleWindow?.IsVisible is false)
            SimpleWindow.Show();
    }

    public static void SimpleWindowButton_OnUnchecked(object sender, RoutedEventArgs args)
    {
        if (SimpleWindow?.IsVisible is true)
            SimpleWindow.Hide();
    }
}