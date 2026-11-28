using System.Collections.ObjectModel;
using Avalonia;
using Avalonia.Controls;
using Avalonia.Interactivity;
using Avalonia.Styling;

namespace GroupBox.Avalonia.Sample.Views;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        ThemeVariantComboBox.ItemsSource = ThemeVariants.Keys;
        ThemeVariantComboBox.SelectedIndex = 0;
    }

    public ReadOnlyDictionary<string, ThemeVariant> ThemeVariants { get; } = new Dictionary<string, ThemeVariant>(){
        {"Default", ThemeVariant.Default},
        {"Light", ThemeVariant.Light},
        {"Dark",ThemeVariant.Dark}
    }.AsReadOnly();

    internal static App? App => Application.Current as App;
    public static FluentWindow? FluentWindow => App?.FluentWindow;
    public static SimpleWindow? SimpleWindow => App?.SimpleWindow;

    public static void FluentWindowButton_OnChanged(object? sender, RoutedEventArgs args)
    {
        if (FluentWindow?.IsVisible is false)
            FluentWindow.Show();
        else if (FluentWindow?.IsVisible is true)
            FluentWindow.Hide();
    }

    public static void SimpleWindowButton_OnChanged(object? sender, RoutedEventArgs args)
    {
        if (SimpleWindow?.IsVisible is false)
            SimpleWindow.Show();
        else if (SimpleWindow?.IsVisible is true)
            SimpleWindow.Hide();
    }

    public void ThemeVariantComboBox_OnSelectionChanged(object? sender, SelectionChangedEventArgs args)
    {
        string selection = args.AddedItems[0]?.ToString() ?? "";
        try
        {
            App?.RequestedThemeVariant = ThemeVariants[selection];
        }
        catch (KeyNotFoundException) { }
    }
}